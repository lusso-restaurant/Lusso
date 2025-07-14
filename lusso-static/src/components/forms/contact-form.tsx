import { submitContactForm } from '@/lib/actions';
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from '../ui';

export function ContactForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={submitContactForm} className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border border-input rounded-md"
            rows={4}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}