import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Bookcar from "./Components/BookCar/Bookcar";
import { Route, Routes } from "react-router";
import LogInFirst from "./Components/login/LogInFirst";
import SignUp from "./Components/login/SignUp"
import Host from "./Components/Host/host"
import Checkout from "./Components/CheckoutPage/Checkout";
import Service from "./Components/Service/Service"
import Earning from "./Components/Host/Earning";
// import Payment from "./Components/Payment/Payment";
import ParentPayment from "./Components/ParentPayment/ParentPayment";


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<AllRoutes />} />
      </Routes>

      <Routes>
        <Route path="/Earning" element={<Earning />} />
      </Routes>

      <Routes>
        <Route path="/ZMS" element={<Service />} />
      </Routes>

      <Routes>
        <Route path="/CheckOut" element={<Checkout />} />
      </Routes>

      <Routes>
        <Route path="/Payment" element={<ParentPayment />} />
      </Routes>


      <Routes>
        <Route path="/BookingCars" element={<Bookcar />} />
      </Routes>

      <Routes>
        <Route path="/HostingPage" element={<Host />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<LogInFirst />} />
      </Routes>

      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
