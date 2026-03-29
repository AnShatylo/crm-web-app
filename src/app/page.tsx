import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';
import './globals.css';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Home Page</h1>
      <AddCompanyButton />
    </main>
  );
}
