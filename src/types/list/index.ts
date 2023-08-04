export type list = {
    identifier: string;
    reference: string | null;
    created_at: string;
    edited_at: string;
    status: string;
    fiat_amount: number;
    crypto_amount: number | null;
    unconfirmed_amount: number;
    confirmed_amount: number;
    currency_id: string;
    merchant_device_id: number;
    address: string | null;
    url_ko: string | null; 
    url_ok: string | null;
    url_standby: string | null;
    expired_time: string | null;
    good_fee: boolean;
    notes: string;
    rbf: boolean;
    safe: boolean;
    fiat: string;
    language: string;
    percentage: number;
    received_amount: number;
    balance_based: string;
    internal_data: string;
    transactions: {
        confirmed: boolean;
        currency: string;
        amount: number;
        tx_hash: string;
        block: number;
        created_at: string;
    }
    }