import sendpay from "../../assets/Sendpay.png";
import ecommerce from "../../assets/E-commerce.png";
import beatslearning from "../../assets/B Learning.png";

export default function Section2() {
  return (
    <section id="portfolio" className="py-16">
      <h2 className="mb-10 text-center text-6xl text-blue-900">
        My <span className=" font-bold">Portfolio</span>
      </h2>

      <div className="mx-auto flex  justify-between">
        <img src={sendpay} alt="Sendpay" className="w-[500px]" />

        <img src={ecommerce} alt="E-Commerce" className="w-[500px]" />

        <img src={beatslearning} alt="BeatsLearning" className="w-[500px]" />
      </div>
    </section>
  );
}