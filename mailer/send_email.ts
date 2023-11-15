import { mailer } from "@deps";
import {
  SMTP_FROM,
  SMTP_HOSTNAME,
  SMTP_PASSWORD,
  SMTP_PORT,
  SMTP_TO,
  SMTP_USERNAME,
} from "@env";

type Email = {
  title: string;
  content: string;
};

const getClient = () => {
  return new mailer.SMTPClient({
    connection: {
      hostname: SMTP_HOSTNAME as string,
      port: parseInt(SMTP_PORT as string, 10),
      tls: true,
      auth: {
        username: SMTP_USERNAME as string,
        password: SMTP_PASSWORD as string,
      },
    },
  });
};

export const sendEmail = async ({
  content,
  title,
}: {
  content: string;
  title: string;
}) => {
  const client = getClient();

  await client.send({
    html: content,
    from: SMTP_FROM as string,
    to: SMTP_TO as string,
    subject: "Omnivore Reminder:" + title,
  });

  await client.close();
};
