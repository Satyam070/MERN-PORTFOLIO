import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map((key) => {
            if (key !== "_id") {
              return (
                <div key={key}>
                  <p className="text-tertiary ml-5">
                    <span className="">{key} : </span>
                    <span className="">{contact[key]}</span>
                  </p>
                </div>
              );
            }
            return null;
          })}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[300px]">
          <dotlottie-player
            src="https://lottie.host/3010317a-1208-41fc-9f10-9ea144dbfe6d/VXzRIt4QqG.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
