import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";
import { Fragment } from "react";

export default function Email({ message }: { message: string }) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Fragment>
          <Body className="bg-white my-12 mx-auto font-sans">
            <Img
              className="mx-auto w-24"
              src="https://avatars.githubusercontent.com/u/57101727?v=4"
            ></Img>
            <Container className="p-8 rounded-lg shadow-lg text-center">
              <Heading className="text-xl pt-4">Hello there 👋</Heading>
              <Text className="text-lg font-medium text-gray-700">
                {message}
              </Text>
              <Button
                className="bg-purple-700 hover:bg-purple-950 text-white font-bold px-4 py-6 rounded-md"
                href="https://github.com/jaymzdrury"
              >
                Check out my Github
              </Button>
            </Container>
          </Body>
        </Fragment>
      </Tailwind>
    </Html>
  );
}
