export interface SymplaTicketDTO {
  id: number;
  event_id: number;
  order_id: string;
  order_status: string;
  order_date: string;
  order_updated_date: string;
  order_approved_date: string;
  order_discount: string;
  first_name: string;
  last_name: string;
  email: string;
  ticket_number: string;
  ticket_num_qr_code: string;
  ticket_name: string;
  pdv_user: string;
  ticket_sale_price: number;
  checkin: {
    id: string;
    check_in: boolean;
    check_in_date: string;
  };
  ondemand_progress: {
    percent_completed: number;
    is_completed: boolean;
  };
  custom_form: {
    id: number;
    name: string;
    value: string;
  }
}