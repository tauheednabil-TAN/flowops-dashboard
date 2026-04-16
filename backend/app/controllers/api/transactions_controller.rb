class Api::TransactionsController < ApplicationController
  def index
    transactions = Transaction.order(created_at: :desc)

    if params[:status].present?
      transactions = transactions.where(status: params[:status])
    end

    if params[:flow_type].present?
      transactions = transactions.where(flow_type: params[:flow_type])
    end

    if params[:q].present?
      q = "%#{params[:q]}%"
      transactions = transactions.where(
        "reference ILIKE ? OR customer_name ILIKE ? OR beneficiary_name ILIKE ?",
        q, q, q
      )
    end

    render json: transactions.limit(100)
  end

  def show
    transaction = Transaction.find(params[:id])
    render json: transaction
  end
end