import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="space-y-6">
        <div className="space-y-4">
          <p>
            Since this website was statically generated at build-time, the only
            run-time server is a file server. This approach favors cost,
            performance and security but lacks a built-in way to handle form
            submissions.
          </p>
          <p>
            To do so, you can use a third-party service, for example to receive
            an email everytime a user fills a contact form.
          </p>
        </div>
        <hr className="border-muted" />
        <p>
          Here is an implementation using{" "}
          <Link
            href="https://form-to-email.com"
            className="font-bold underline"
            target="_blank"
          >
            form-to-email
          </Link>{" "}
          <i>(disclaimer – I operate this service)</i>:
        </p>
      </div>

      <form
        action="https://www.form-to-email.com/api/s/5VXJU3_8YgcU"
        method="POST"
        className="space-y-2 flex flex-col items-stretch max-w-96"
      >
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="email"
          required
          className="border border-muted rounded-md p-2"
        />
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
        ></textarea>
        <button className="mt-2 p-2 bg-foreground text-background rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
