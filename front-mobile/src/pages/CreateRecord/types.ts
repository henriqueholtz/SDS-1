export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION';

export type Game = {
    id: number;
    title: string;
    platform: GamePlatform;
    label: string; //essas 2 ultimas serão para o ComboBox
    value: number;
};