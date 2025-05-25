// SPDX-License-Identifier: Apache-2.0

module suimemento::marketplace {
  use sui::object::{Self, UID};
  use sui::transfer;
  use sui::tx_context::{Self, TxContext};
  use sui::coin::{Self, Coin};
  use sui::sui::SUI;
  use suimemento::badge::Badge;

  struct Listing has key {
    id: UID,
    badge_id: ID,
    price: u64,
    seller: address,
  }

  
}