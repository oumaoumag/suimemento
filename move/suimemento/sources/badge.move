// SPDX-License-Identifier: Apache-2.0

module suimemento::badge {
  use sui::object::{Self, UID, ID};
  use sui::transfer;
  use sui::tx_context::{Self, TxContext};
  use std::string::{Self, String};

  public struct Badge has key, store {
    id: UID,
    event_id: ID,
    name: String,
    owner: address,
    level: u64,
    image_url: String,
  }

  // Events for frontend integration
  public struct BadgeMinted has copy, drop {
    badge_id: ID,
    event_id: ID,
    recipient: address,
    level: u64,
  }

  public struct BadgeUpgraded has copy, drop {
    badge_id: ID,
    old_level: u64,
    new_level: u64,
  }

  public entry fun mint_badge(
    event_id: ID, 
    name: vector<u8>, 
    image_url: vector<u8>,
    recipient: address, 
    ctx: &mut TxContext
  ) {
    let badge = Badge {
      id: object::new(ctx),
      event_id,
      name: string::utf8(name),
      owner: recipient,
      level: 1,
      image_url: string::utf8(image_url),
    };
    
    let badge_id = object::id(&badge);
    
    // Emit event for frontend
    sui::event::emit(BadgeMinted {
      badge_id,
      event_id,
      recipient,
      level: 1,
    });
    
    transfer::transfer(badge, recipient);
  }

  public entry fun claim_badge(
    event_id: ID, 
    code: vector<u8>, 
    ctx: &mut TxContext
  ) {
    // Placeholder: Verify code (actual logic to be implemented)
    assert!(code == b"valid_code", 1);
    
    let sender = tx_context::sender(ctx);
    let badge = Badge {
      id: object::new(ctx),
      event_id,
      name: string::utf8(b"Event Badge"),
      owner: sender,
      level: 1,
      image_url: string::utf8(b"https://default-badge-image.com"),
    };
    
    let badge_id = object::id(&badge);
    
    sui::event::emit(BadgeMinted {
      badge_id,
      event_id,
      recipient: sender,
      level: 1,
    });
    
    transfer::transfer(badge, sender);
  }

  public entry fun upgrade_badge(badge: &mut Badge, ctx: &mut TxContext) {
    assert!(badge.owner == tx_context::sender(ctx), 2);
    let old_level = badge.level;
    badge.level = badge.level + 1;
    
    sui::event::emit(BadgeUpgraded {
      badge_id: object::id(badge),
      old_level,
      new_level: badge.level,
    });
  }

  // Getter functions for frontend
  public fun get_badge_info(badge: &Badge): (ID, String, address, u64, String) {
    (badge.event_id, badge.name, badge.owner, badge.level, badge.image_url)
  }
}