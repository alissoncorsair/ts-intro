type AccountInfo = {
 id: number | string,
 name: string,
 email?: string
};

const account: AccountInfo = {
    id: Math.random()*100,
    name: 'Alisson',
};

type CharInfo = {
    nickname: string,
    level: number
};

const char: CharInfo = {
    nickname: 'Khoria',
    level: 1000
};

/** Isso se chama intersection */
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    name: 'Alisson',
    id: Math.random()*100,
    nickname: 'Khoria',
    level: 100
};