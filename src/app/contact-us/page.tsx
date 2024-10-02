import Image from "next/image";
import FbLogo from "./fb logo.webp";
import GitHubLogo from "./github-logo.png";
import GmailLogo from "./gmail logo.png";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div id="container">
      <div id="logo">
        <div className="logo-buttons">
          <Link href="https://www.facebook.com/">
            <Image className="facebook" src={FbLogo} alt="FbLogo" />
          </Link>
        </div>
        <div className="logo-buttons">
          <Link href="https://github.com/">
            <Image className="github" src={GitHubLogo} alt="GitHubLogo" />
          </Link>
        </div>
        <div className="logo-buttons">
          <Link href="https://mail.google.com/mail/u/0/">
            <Image className="gmail" src={GmailLogo} alt="GmailLogo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
