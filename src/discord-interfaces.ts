//#region OPCODE PAYLOADS
export interface DiscordRawPayload<T = any> {
  t: string;
  s: number;
  op: number;
  d: T;
}
export interface DiscordHearbeatPayload_10 extends DiscordRawPayload {
  op: 10;
  d: {
    heartbeat_interval: number;
    _trace: string[];
  };
}
export interface DiscordInvalidSessionPayload_9 extends DiscordRawPayload {
  op: 9;
  d: boolean;
}
export interface DiscordReadyPayload_1 extends DiscordRawPayload {
  t: "READY";
  op: 0;
  d: {
    v: number;
    user_settings: any;
    user: User;
    session_id: string;
    relationships: any[];
    private_channels: any[];
    presences: any[];
    guilds: {
      unavailable: boolean;
      id: string;
    }[];
    guild_join_requests: any[];
    geo_ordered_rtc_regions: string[];
    application: { id: string; flags: number };
    _trace: string[];
  };
}
//#endregion

//#region General
export interface User {
  verified?: boolean;
  username: string;
  mfa_enabled?: boolean;
  id: string;
  flags?: number;
  email?: null | string;
  discriminator: string;
  bot?: boolean;
  avatar: null | string;
  system?: boolean;
  locale?: string;
  premium_type?: number;
  public_flags?: number;
}
export interface GuildMember {
  user: User;
  roles: string[];
  premium_since: string;
  permissions: string;
  pending?: boolean;
  nick?: string;
  mute: boolean;
  joined_at: string;
  is_pending: boolean;
  deaf: boolean;
}
export interface AllowedMentions {
  roles: boolean;
  users: boolean;
  everyone: boolean;
}
export interface Embed {
  title?: string; //title of embed
  type?: string; //type of embed (always "rich" for webhook embeds)
  description?: string; //description of embed
  url?: string; //url of embed
  timestamp?: string; //ISO8601 timestamp	timestamp of embed content
  color?: number; //color code of the embed
  footer?: {
    text: string; //footer text
    icon_url?: string; //url of footer icon (only supports http(s) and attachments)
    proxy_icon_url?: string; //a proxied url of footer icon
  }; //footer information
  image?: {
    url?: string; //source url of image (only supports http(s) and attachments)
    proxy_url?: string; //a proxied url of the image
    height?: number; //height of image
    width?: number; //width of image
  }; //embed image object	//image information
  thumbnail?: {
    url?: string; //source url of thumbnail (only supports http(s) and attachments)
    proxy_url?: string; //a proxied url of the thumbnail
    height?: number; //height of thumbnail
    width?: number; //width of thumbnail
  }; //embed thumbnail object	//thumbnail information
  video?: {
    url?: string; //source url of video
    proxy_url?: string; //a proxied url of the video
    height?: number; //height of video
    width?: number; //width of video
  }; //embed video object	//video information
  provider?: {
    name?: string; //name of provider
    url?: string; //url of provider
  }; //embed provider object	//provider information
  author?: {
    name?: string; //name of author
    url?: string; //url of author
    icon_url?: string; //url of author icon (only supports http(s) and attachments)
    proxy_icon_url?: string; //a proxied url of author icon
  }; //embed author object	//author information
  fields?: EmbedField[]; //array of embed field objects	//fields information
}
export interface EmbedField {
  name: string; //name of the field
  value: string; //value of the field
  inline?: boolean; //whether or not this field should display inline
}
//#endregion

//#region Slash Commands
export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
}
export interface CreateApplicationCommand {
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
}
export interface ApplicationCommand {
  id: string;
  application_id: string;
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
}
export interface ApplicationCommandOption {
  type: ApplicationCommandOptionType;
  /**
   * 1-32 character name matching ^[\w-]{1,32}$
   *
   * @type {string}
   * @memberof ApplicationCommandOption
   */
  name: string;
  /**
   * 1-100 character description
   *
   * @type {string}
   * @memberof ApplicationCommandOption
   */
  description: string;
  default?: boolean;
  required?: boolean;
  /**
   * choices for string and int types for the user to pick from
   *
   * @type {ApplicationCommandOptionChoice[]}
   * @memberof ApplicationCommandOption
   */
  choices?: ApplicationCommandOptionChoice[];
  /**
   * if the option is a subcommand or subcommand group type, this nested options will be the parameters
   *
   * @type {ApplicationCommandOption[]}
   * @memberof ApplicationCommandOption
   */
  options?: ApplicationCommandOption[];
}
export interface ApplicationCommandOptionChoice {
  /**
   * 1-100 character choice name
   *
   * @type {string}
   * @memberof ApplicationCommandOptionChoice
   */
  name: string;
  /**
   * value of the choice
   *
   * @type {(string|number)}
   * @memberof ApplicationCommandOptionChoice
   */
  value: string | number;
}
export interface Interaction {
  /**
   * read-only property, always 1
   *
   * @type {1}
   * @memberof DiscordInteractionDispatch
   */
  version: 1;
  /**
   * the type of interaction
   *
   * @type {InteractionType}
   * @memberof DiscordInteractionDispatch
   */
  type: InteractionType;
  /**
   * a continuation token for responding to the interaction
   *
   * @type {string}
   * @memberof DiscordInteractionDispatch
   */
  token: string;
  /**
   * guild member data for the invoking user, including permissions
   *
   * @type {GuildMember}
   * @memberof DiscordInteractionDispatch
   */
  member?: GuildMember;
  /**
   * user object for the invoking user, if invoked in a DM
   *
   * @type {User}
   * @memberof DiscordInteractionDispatch
   */
  user?: User;
  /**
   * id of the interaction
   *
   * @type {string}
   * @memberof DiscordInteractionDispatch
   */
  id: string;
  /**
   * the guild it was sent from
   *
   * @type {string}
   * @memberof DiscordInteractionDispatch
   */
  guild_id?: string;
  /**
   * the command data payload
   *
   * @type {ApplicationCommandInteractionData}
   * @memberof DiscordInteractionDispatch
   */
  data?: ApplicationCommandInteractionData;
  /**
   * the channel it was sent from
   *
   * @type {string}
   * @memberof DiscordInteractionDispatch
   */
  channel_id?: string;
}
export enum InteractionType {
  PING = 1,
  APPLICATION_COMMAND = 2,
}
export interface ApplicationCommandInteractionData {
  /**
   * the params + values from the user
   *
   * @type {[]}
   */
  options: [];
  /**
   * the name of the invoked command
   *
   * @type {string}
   */
  name: string;
  /**
   * the ID of the invoked command
   *
   * @type {string}
   */
  id: string;
  resolved?: {
    users?: { [id: string]: User };
    members?: { [id: string]: GuildMember }[];
  };
}
export interface ApplicationCommandInteractionDataOption {
  name: string;
  value?: ApplicationCommandOptionType;
  options?: ApplicationCommandInteractionDataOption[];
}
export interface InteractionResponse {
  type: InteractionResponseType;
  data?: InteractionApplicationCommandCallbackData;
}
export enum InteractionResponseType {
  Pong = 1,
  Acknowledge = 2,
  ChannelMessage = 3,
  ChannelMessageWithSource = 4,
  AcknowledgeWithSource = 5,
}
export interface InteractionApplicationCommandCallbackData {
  tts?: boolean;
  content: string;
  embeds?: Embed[];
  allowed_mentions?: AllowedMentions;
}
//#endregion
