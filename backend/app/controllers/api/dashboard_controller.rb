class Api::DashboardController < ApplicationController
  def summary
    transactions = Transaction.all

    render json: {
      total_transactions: transactions.count,
      total_volume: transactions.sum(:amount).to_f,
      success_count: transactions.where(status: "success").count,
      pending_count: transactions.where(status: "pending").count,
      failed_count: transactions.where(status: "failed").count,
      pay_in_count: transactions.where(flow_type: "pay_in").count,
      payout_count: transactions.where(flow_type: "payout").count
    }
  end
end