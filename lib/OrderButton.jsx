function OrderButton() {
  return (
    <div className="fixed bottom-10  z-50 flex w-full justify-center md:justify-end lg:hidden ">
      <a
        href="https://www.toasttab.com/paros-family-restaurant-929-e-verdugo-ave/v3/?mode=fulfillment"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-dark-blue darker-blue-bg mx-4 mt-8 rounded-xl px-14 py-4 text-lg font-semibold text-white shadow-lg duration-300 hover:bg-blue-300 lg:px-16 lg:py-4 lg:text-2xl">
          Order Online
        </button>
      </a>
    </div>
  );
}

export default OrderButton;
