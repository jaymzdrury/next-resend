import { postData } from "@/actions/actions";

export default function Home() {
  return (
    <main>
      <form action={postData}>
        <label htmlFor="email">Email</label>
        <br />
        <input required type="email" name="email" />
        <br />
        <label htmlFor="title">Title</label>
        <br />
        <input required type="text" name="title" />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea required name="message" id="" cols={30} rows={10}></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
