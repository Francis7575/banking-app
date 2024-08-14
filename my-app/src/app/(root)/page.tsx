import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Francis', lastName: 'Sanchez', email: 'francis.test@gmail.com' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 125.50}, {currentBalance: 425.50}]}
      />
    </section>
  )
}

export default Home