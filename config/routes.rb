Rails.application.routes.draw do
  post 'stkpush', to: 'users#stkpush'
  post 'stkquery', to: 'users#stkquery'
end

