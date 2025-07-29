import './CClubGlobal.css'
import { CClubHero } from './CClubHero/CClubHero'
// import { HowItWorks } from './components/2_HowItWorks/HowItWorks'
// import { Perks } from './components/4_Perks/Perks'
// import { WaysToEarn } from './components/5_WaysToEarn/WaysToEarn'

export default function App() {
  return (
    <div className="cclub-wrapper">
      <CClubHero />
      {/* <HowItWorks />
      <Perks />
      <WaysToEarn /> */}
    </div>
  )
}