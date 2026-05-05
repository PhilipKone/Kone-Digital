import { useCurrency } from '../../context/CurrencyContext';
import './CurrencyToggle.css';

export const CurrencyToggle = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="currency-toggle neon-border">
      <button 
        className={`currency-btn ${currency === 'GHS' ? 'active' : ''}`}
        onClick={() => setCurrency('GHS')}
      >
        GHS
      </button>
      <button 
        className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
        onClick={() => setCurrency('USD')}
      >
        USD
      </button>
    </div>
  );
};
