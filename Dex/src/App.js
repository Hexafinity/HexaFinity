import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./components/layout";
import Index from './pages/index';
import StakingBSW from './pages/staking/staking-bsw';
import Farms from './pages/farming/farms';
import Swap from './pages/swap/swap';

import './App.css';
import './sass/style.scss'

const App = () => {
  return (
      <>
        <Layout>
          <Router>
            <Routes>
              <Route path='/' exact={true} element={<Index />} />
            </Routes>
            <Routes>
              <Route path='/pools/stake_bsw/' element={<StakingBSW isToken={false} isActive={true} />} />
            </Routes>
            <Routes>
              <Route path='/pools/stake_bsw/history' element={<StakingBSW isToken={false} isActive={false} />} />
            </Routes>
            <Routes>
              <Route path='/pools/stake_tokens/' element={<StakingBSW isToken={true} isActive={true} />} />
            </Routes>
            <Routes>
              <Route path='/pools/stake_tokens/history' element={<StakingBSW isToken={true} isActive={false} />} />
            </Routes>
            <Routes>
              <Route path='/farms' element={<Farms isLive={true} />} />
            </Routes>
            <Routes>
              <Route path='/farms/history' element={<Farms isLive={false} />} />
            </Routes>
            <Routes>
              <Route path='/swap/:id' exact={true} element={<Swap/>} />
            </Routes>
          </Router>
        </Layout>
      </>
  );
}

export default App;
