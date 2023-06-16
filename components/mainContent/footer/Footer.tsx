import { FooterCopyRight, FooterLinks } from "@/components";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-grey-100">
      <div className="flex flex-col w-full flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <FooterLinks />
      </div>
        <FooterCopyRight />
    </footer>
  )
}

export default Footer