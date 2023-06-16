import { footerLinks } from "@/constants"
import Link from "next/link"

const FooterLinks = () => {
  return (
    <div className="footer__links">
      {footerLinks.map((link) => (
        <div key={link.title} className="footer__link">
          <h3 className="font-bold">{link.title}</h3>
          {link.links.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="text-base text-gray-500"
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default FooterLinks