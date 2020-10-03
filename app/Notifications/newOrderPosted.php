<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

use Auth;
use App\User;
use App\Orders;

class newOrderPosted extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */


     protected $user;
     protected $orders;
    public function __construct( Orders $orders )
    {
        $this->orders = $orders;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {   $user =auth('api')->user();
            dd($user);
        return [
            'ordersUser_id' =>$this->orders->user_id,
            'firstNameUser' => $this->orders->user_id,
            'lastNameUser' => $this->orders->userName->name,
            'ordersnbrOrder' =>$this->orders->nbrOrder,
            'ordersTotale' =>$this->orders->priceTotale,
            'ordersId' =>$this->orders->id,


        ];
    }
}
