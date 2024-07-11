const projectsData = [
  {
    id: '01',
    title: 'S&P 500 Database',
    tech: 'Python',
    link: 'https://github.com/rebekah999/Data-Analysis-Portfolio/blob/main/%20S%26P%20500%20Database%20Pipeline.ipynb',
    image: '/img/database-pipeline.png',
    description:
      "This notebook enables users to analyze SPY options trading data based on a specified expiration date. It calculates SPY's trading range for the selected date and retrieves all options that traded at the money (ATM) on that day and expire on the given date. Subsequently, it uploads both the underlying stock data and options data to a locally hosted PostgreSQL database.",
  },
  {
    id: '02',
    title: 'Marketing Analysis: Term Deposit Campaign',
    tech: 'Tableau',
    link: 'https://public.tableau.com/app/profile/fowler.rebekah/viz/MarketingAnalysis_17062759188240/TermDepositCampaign',
    image: '/img/term-deposit-campaign.png',
    description:
      'This storyboard is designed to compare the success of the current term deposit marketing campaign with the previous one, as well as to identify the demographic groups that responded best to the current campaign.',
  },
  {
    id: '03',
    title: 'Bike Store Sales Analysis',
    tech: 'SQL',
    link: 'https://github.com/rebekah999/Data-Analysis-Portfolio/blob/main/Bike%20Store%20Sales%20Analysis.sql',
    image: '/img/biker-store-analysis.png',
    description:
      'A SQL file with queries providing insights into order processing, revenue analysis, customer behavior, inventory management, and employee performance.',
  },
  {
    id: '04',
    title: '2022 Milwaukee Property Sales',
    tech: 'Excel',
    link: 'https://github.com/rebekah999/Data-Analysis-Portfolio/blob/main/2022%20Milwaukee%20Property%20Sales%20Dashboard.xlsx',
    image: '/img/milwaukee-property-sales.png',
    description:
      'An Excel dashboard analyzing residential property sales in Milwaukee.',
  },
  {
    id: '05',
    title: 'Employee Churn Prediction',
    tech: 'Python',
    link: 'https://github.com/rebekah999/Data-Analysis-Portfolio/blob/main/Salifort%20Motors%20-%20Employee%20Churn%20Prediction.ipynb',
    image: '/img/salifort-motors.png',
    description:
      'A Jupyter Notebook where I used a logistic regression to predict whether an employee will churn.',
  },
  {
    id: '06',
    title: 'Adidas Sales Dashboard',
    tech: 'Tableau',
    link: 'https://public.tableau.com/app/profile/fowler.rebekah/viz/Adidas_17001247399800/HomePage',
    image: '/img/adidas-sales-dashboard.png',
    description:
      'A Tableau dashboard visualizing how operating margins charge based on the year, store locations, and product sales.',
  },
]

export default projectsData
