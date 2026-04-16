export interface Transaction {
  id: number;
  reference: string;
  flow_type: string;
  status: string;
  amount: string;
  currency: string;
  country: string;
  customer_name: string;
  beneficiary_name: string;
  masked_account: string;
  failure_reason: string | null;
  created_at: string;
  updated_at: string;
}