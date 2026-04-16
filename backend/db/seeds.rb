Transaction.destroy_all

statuses = ["success", "pending", "failed"]
flow_types = ["pay_in", "payout"]
currencies = ["EUR", "GBP", "USD", "DKK", "SEK"]
countries = ["Denmark", "Germany", "United Kingdom", "Sweden", "France", "Spain"]

200.times do |i|
  status = statuses.sample

  Transaction.create!(
    reference: "TXN-#{1000 + i}",
    flow_type: flow_types.sample,
    status: status,
    amount: rand(100.0..5000.0).round(2),
    currency: currencies.sample,
    country: countries.sample,
    customer_name: ["Acme Ltd", "NordPay ApS", "Global Foods", "Blue Retail", "FinHub"].sample,
    beneficiary_name: ["John Smith", "Maria Jensen", "Lars Olsen", "Fatima Khan", "Anna Berg"].sample,
    masked_account: "****#{rand(1000..9999)}",
    failure_reason: status == "failed" ? ["Insufficient funds", "Compliance review", "Invalid account", "Timeout"].sample : nil
  )
end

puts "Seeded #{Transaction.count} transactions"