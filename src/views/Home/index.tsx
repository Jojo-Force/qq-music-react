import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import { useEffect } from "react";


const Home = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "./js/script.js";
        script.async = false;
        document.body.appendChild(script);
        return () => {
            // 组件卸载时移除脚本
            document.body.removeChild(script);
        };
    }, []);
  return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
  );
};

export default Home;
