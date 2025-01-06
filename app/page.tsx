import Hero from "./components/Hero";
import Newest from "./components/Newest";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      
        <title>潮流服飾購物</title> {/* 這裡決定了瀏覽器標籤的文字 */}
        <meta name="description" content="潮流服飾購物" />
      
     <Hero />
     <Newest />
    </div>
  );
}
