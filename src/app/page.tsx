export default function Home() {

  const getDay = (currentDate: Date) => {
    const startDate = new Date('2023-04-20') 
    const days = ['Push', 'Pull', 'Leg', 'Rest']
    const diff = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const day = days[diff % 4]
    return day
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontSize: 'calc(10px + 2vmin)',
    }}>
      <h1>Today is:</h1>
      <h2>{getDay( new Date('2023-04-24'))} Day</h2>
    </div>
  )
}
