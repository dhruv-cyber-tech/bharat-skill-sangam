// src/components/Chat/Chat.tsx
import { useEffect, useState, FormEvent, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { Tables } from '@/integrations/supabase/types';
import { Skeleton } from '@/components/ui/skeleton';

// Define a type for the message for better type safety
type Message = Tables<'messages'>;

const Chat = ({ otherUserId }: { otherUserId: string }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Fetch initial messages
  useEffect(() => {
    const fetchMessages = async () => {
      if (!user) return;

      setLoading(true);
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .or(`(sender_id.eq.${user.id},receiver_id.eq.${otherUserId}),(sender_id.eq.${otherUserId},receiver_id.eq.${user.id})`)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data as Message[]);
      }
      setLoading(false);
    };

    fetchMessages();
  }, [user, otherUserId]);

  // Set up real-time subscription
  useEffect(() => {
    if (!user) return;

    // A unique channel name for this specific chat
    const channel = supabase.channel(`messages:${user.id}:${otherUserId}`);

    const subscription = channel
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        // Add the new message to the state if it's part of this conversation
        const newMessagePayload = payload.new as Message;
        if (
          (newMessagePayload.sender_id === user.id && newMessagePayload.receiver_id === otherUserId) ||
          (newMessagePayload.sender_id === otherUserId && newMessagePayload.receiver_id === user.id)
        ) {
          setMessages((prevMessages) => [...prevMessages, newMessagePayload]);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, otherUserId]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !user) return;

    const { error } = await supabase.from('messages').insert({
      sender_id: user.id,
      receiver_id: otherUserId,
      content: newMessage,
    });

    if (error) {
      console.error('Error sending message:', error);
    } else {
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-card border rounded-lg shadow-lg">
        {/* Chat Header */}
        <div className="p-4 border-b">
            <h3 className="font-semibold text-lg">Chat</h3>
        </div>
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
        {loading ? (
           <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-10 w-1/2 ml-auto" />
            <Skeleton className="h-12 w-2/3" />
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.sender_id === user?.id ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-lg px-3 py-2 max-w-xs lg:max-w-md ${
                  msg.sender_id === user?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <span className="text-xs opacity-70 float-right pt-1">
                  {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t flex items-center space-x-2 bg-background">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1"
          autoComplete="off"
        />
        <Button type="submit" size="icon" disabled={!newMessage.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default Chat;
