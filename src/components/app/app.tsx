import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  errorsCount: number;
} //тоже самое, что в майн-пейдж

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage errorsCount={errorsCount} />
  );
}


export default App;

//тут просто скопировала из учебного проекта, исправить на мое
