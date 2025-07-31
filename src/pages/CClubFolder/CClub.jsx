import './CClubGlobal.css'
import { CClubHero } from './CClubHero/CClubHero'
import { HowItWorks } from './2_HowItWorks/HowItWorks'
import { Perks } from './4_Perks/Perks'
import { WaysToEarn } from './5_WaysToEarn/WaysToEarn'

export const CClub = () => {
  return (
    <div className="cclub-wrapper">
      <CClubHero />
      <HowItWorks />
      <Perks />
      <WaysToEarn />
    </div>
  )
}
