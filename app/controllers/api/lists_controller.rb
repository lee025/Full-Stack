class Api::ListsController < ApplicationController
  before_action :require_user

  def new
    @list = List.new
  end

  def index
    @lists = List.all 
  end

  def show
    @list = current_user.lists.find(id: params[:id])
    render :show
  end

  def create
    @list = current_user.lists.new(list_params)
    if @list.save
      render 'api/lists/show'
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def edit 
    @list = current_user.lists.find(params[:id])
  end

  def update
    @list = current_user.lists.find(params[:id])
    if @list.update(list_params)
      render 'api/lists/show'
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = current_user.lists.find(params[:id])
    @list.destroy

  end

  private
  def list_params
    params.require(:list).permit(:title)
  end

end
