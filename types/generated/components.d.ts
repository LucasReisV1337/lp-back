import type { Schema, Attribute } from '@strapi/strapi';

export interface EventLocalNearbyHotels extends Schema.Component {
  collectionName: 'components_event_local_nearby_hotels';
  info: {
    displayName: 'nearby-hotels';
  };
  attributes: {
    titleLink: Attribute.String;
    description: Attribute.String;
  };
}

export interface EventLocalGoogleMap extends Schema.Component {
  collectionName: 'components_event_local_google_maps';
  info: {
    displayName: 'googleMap';
  };
  attributes: {
    urlMap: Attribute.String;
  };
}

export interface EventLocalEventLocal extends Schema.Component {
  collectionName: 'components_event_local_event_locals';
  info: {
    displayName: 'eventLocal';
  };
  attributes: {
    googleMaps: Attribute.Component<'event-local.google-map'>;
    nearbyHotels: Attribute.Component<'event-local.nearby-hotels', true>;
  };
}

export interface TimelineCardTimelineCart extends Schema.Component {
  collectionName: 'components_timeline_card_timeline_carts';
  info: {
    displayName: 'timelineCart';
  };
  attributes: {
    day: Attribute.String;
    description: Attribute.String;
  };
}

export interface TimelineCardScheduleCard extends Schema.Component {
  collectionName: 'components_schedule_card_schedule_cards';
  info: {
    displayName: 'TimelineCard';
    description: '';
  };
  attributes: {
    timeLineCart: Attribute.Component<'timeline-card.timeline-cart', true>;
  };
}

export interface EventDetailSubscriptionCard extends Schema.Component {
  collectionName: 'components_event_detail_subscription_cards';
  info: {
    displayName: 'subscriptionCard';
  };
  attributes: {
    descriptionCard: Attribute.Text;
  };
}

export interface EventDetailScheduleCard extends Schema.Component {
  collectionName: 'components_event_detail_schedule_cards';
  info: {
    displayName: 'scheduleCard';
  };
  attributes: {
    descriptionCard: Attribute.Text;
  };
}

export interface EventDetailLocalizationCard extends Schema.Component {
  collectionName: 'components_event_detail_localization_cards';
  info: {
    displayName: 'localizationCard';
  };
  attributes: {
    descriptionCard: Attribute.Text;
  };
}

export interface EventDetailEventDetail extends Schema.Component {
  collectionName: 'components_event_detail_event_details';
  info: {
    displayName: 'EventDetail';
  };
  attributes: {
    dateCard: Attribute.Component<'event-detail.date-card'>;
    localizationCard: Attribute.Component<'event-detail.localization-card'>;
    scheduleCard: Attribute.Component<'event-detail.schedule-card'>;
    subscriptionCard: Attribute.Component<'event-detail.subscription-card'>;
  };
}

export interface EventDetailDateCard extends Schema.Component {
  collectionName: 'components_event_detail_date_cards';
  info: {
    displayName: 'dateCard';
  };
  attributes: {
    descriptionCard: Attribute.Text;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    cardContact: Attribute.Component<'contact.card-contact', true>;
  };
}

export interface ContactCardContact extends Schema.Component {
  collectionName: 'components_contact_card_contacts';
  info: {
    displayName: 'cardContact';
  };
  attributes: {
    Name: Attribute.String;
    role: Attribute.String;
    emails: Attribute.String;
    linkedin: Attribute.String;
  };
}

export interface BranchLocationsOurBranches extends Schema.Component {
  collectionName: 'components_branch_locations_our_branches';
  info: {
    displayName: 'ourBranches';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    googleMapLink: Attribute.String;
  };
}

export interface BranchLocationsBranchLocations extends Schema.Component {
  collectionName: 'components_branch_locations_branch_locations';
  info: {
    displayName: 'BranchLocations';
  };
  attributes: {
    ourBranches: Attribute.Component<'branch-locations.our-branches', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'event-local.nearby-hotels': EventLocalNearbyHotels;
      'event-local.google-map': EventLocalGoogleMap;
      'event-local.event-local': EventLocalEventLocal;
      'timeline-card.timeline-cart': TimelineCardTimelineCart;
      'timeline-card.schedule-card': TimelineCardScheduleCard;
      'event-detail.subscription-card': EventDetailSubscriptionCard;
      'event-detail.schedule-card': EventDetailScheduleCard;
      'event-detail.localization-card': EventDetailLocalizationCard;
      'event-detail.event-detail': EventDetailEventDetail;
      'event-detail.date-card': EventDetailDateCard;
      'contact.contact': ContactContact;
      'contact.card-contact': ContactCardContact;
      'branch-locations.our-branches': BranchLocationsOurBranches;
      'branch-locations.branch-locations': BranchLocationsBranchLocations;
    }
  }
}
