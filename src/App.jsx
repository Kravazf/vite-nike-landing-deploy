import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

const App = () => {
  const handleButtonShopNowClick = () => {
    window.open("https://www.nike.com/", "_blank")
  }

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero handleButtonShopNowClick={handleButtonShopNowClick} />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality handleButtonShopNowClick={handleButtonShopNowClick} />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer handleButtonShopNowClick={handleButtonShopNowClick} />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:pt-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-coral-red padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
   );
}
 
export default App;
