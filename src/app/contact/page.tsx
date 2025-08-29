import { ExternalLink } from "@/app/lib/ExternalLink";
import { H1 } from "@/app/lib/H1";
import { HR } from "@/app/lib/HR";
import { P } from "@/app/lib/P";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <H1>Contact</H1>
      <P>
        Since this website was statically generated at build-time, the only
        run-time server is a file server. This approach favors cost, performance
        and security but lacks a built-in way to handle form submissions.
      </P>
      <P>
        However, you can use a third-party service, e.g. if you wish to receive
        an email everytime a user fills a form.
      </P>
      <HR />
      <P>
        Here is an implementation using{" "}
        <ExternalLink href="https://form-to-email.com">
          form-to-email
        </ExternalLink>{" "}
        <i>(disclaimer – I operate this service)</i>:
      </P>

      <form
        action="https://www.form-to-email.com/api/s/5VXJU3_8YgcU"
        method="POST"
        className="mt-6 space-y-2 flex flex-col items-stretch max-w-96"
      >
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="email"
          required
          className="border border-muted rounded-md p-2"
        />
        <i className="text-xs text-secondary">
          For demonstration purposes, the email will be sent to this address.
        </i>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          required
          className="border border-muted rounded-md p-2"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          required
          className="border border-muted rounded-md p-2 min-h-24"
          defaultValue="Hi, trying to reach out to you from your blog."
        ></textarea>
        <button className="mt-2 p-2 bg-foreground text-background rounded-md active:bg-foreground/80">
          Submit
        </button>
      </form>
    </div>
  );
}
