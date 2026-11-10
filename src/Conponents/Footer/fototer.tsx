import github from "../../assets/Git.png";
import instagram from "../../assets/Instagram.png";
import email from "../../assets/Email (1).png";
import phone from "../../assets/telpon.png";
import footer from "../../assets/Vector (4).png";

export default function Footer() {
  return (
    <footer className="pt-8">
      <div className="mx-auto flex w-[750px] ">
        <img src={github} alt="Github" className="w-50" />
        <img src={instagram} alt="Instagram" className="w-50" />
        <img src={email} alt="Email" className="w-50" />
        <img src={phone} alt="Phone" className="w-50" />
      </div>

      <div className="ml-0  w-304">
        <img
          src={footer}
          alt="Footer"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </footer>
  );
}