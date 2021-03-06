import { pbkdf2Sync } from 'crypto';

const numbers = Array.from({ length: 256 }, (_, i) => ['2', '3', '4', '5', '6', '7', '8', '9'][i % 8]);
const specials = Array.from({ length: 256 }, (_, i) => ['.', ',', '!', '*', '#', '&', '^', '~'][i % 8]);
const lowers = Array.from(
    { length: 256 },
    (_, i) => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'r', 's', 't'][i % 16]
);
const uppers = Array.from(
    { length: 256 },
    (_, i) => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'R', 'S', 'T'][i % 16]
);

// prettier-ignore
const words = ['and', 'ask', 'ass', 'ape', 'ate', 'axe', 'air', 'aim', 'ana', 'awe', 'act', 'add', 'age', 'all', 'ant', 'bat', 'ban', 'bar', 'bed', 'bee', 'bet', 'bit', 'bug', 'bob', 'bot', 'boy', 'bud', 'but', 'cab', 'can', 'cap', 'cat', 'car', 'cog', 'con', 'cop', 'cot', 'cow', 'coy', 'cub', 'cut', 'dad', 'dam', 'dan', 'day', 'den', 'did', 'dig', 'dip', 'doc', 'dog', 'don', 'dot', 'dry', 'dug', 'ear', 'eat', 'egg', 'ego', 'elf', 'elk', 'elm', 'end', 'eye', 'eve', 'fad', 'fan', 'far', 'fat', 'fax', 'fig', 'fit', 'fix', 'fly', 'few', 'foe', 'fog', 'for', 'fur', 'gag', 'gap', 'gel', 'gem', 'get', 'god', 'goo', 'got', 'gum', 'gun', 'gut', 'guy', 'gym', 'hot', 'how', 'has', 'had', 'ham', 'hat', 'him', 'her', 'hit', 'hop', 'ice', 'icy', 'ill', 'ink', 'inn', 'ion', 'its', 'ivy', 'jam', 'jar', 'jaw', 'jay', 'jet', 'jim', 'joe', 'jog', 'jot', 'joy', 'jug', 'keg', 'ken', 'key', 'kid', 'kim', 'kit', 'kin', 'lab', 'lad', 'lap', 'law', 'lie', 'lee', 'let', 'lip', 'lob', 'log', 'lot', 'low', 'lug', 'mac', 'mag', 'map', 'man', 'mat', 'max', 'meg', 'men', 'met', 'mom', 'moo', 'mop', 'mow', 'mud', 'mug', 'mut', 'nab', 'nag', 'nap', 'net', 'new', 'nip', 'nod', 'not', 'now', 'nun', 'nut', 'oak', 'oat', 'oar', 'off', 'oil', 'old', 'one', 'our', 'out', 'own', 'pan', 'pal', 'pam', 'pat', 'pea', 'pen', 'pet', 'pig', 'pit', 'pot', 'rag', 'ray', 'run', 'ram', 'ran', 'rap', 'rat', 'rig', 'rip', 'rob', 'ron', 'rot', 'sad', 'sag', 'sam', 'sat', 'say', 'see', 'sex', 'set', 'she', 'shy', 'sin', 'sir', 'sit', 'sky', 'soy', 'sun', 'tan', 'tap', 'tar', 'tea', 'ted', 'too', 'the', 'tim', 'tip', 'toe', 'tom', 'toy', 'wag', 'was', 'wax', 'way', 'web', 'wee', 'wet', 'why', 'wig', 'win', 'wow', 'won', 'yak', 'yam', 'yap', 'yen', 'yep', 'yes', 'yet', 'yew', 'you', 'yum', 'zag', 'zig', 'zit', 'zap', 'zip', 'zoo'];

const extra = (c) => specials[c.shift()] + uppers[c.shift()] + numbers[c.shift()];

const short = (c) => Array.from({ length: 9 }, () => lowers[c.shift()]).join('') + extra(c);
const long = (c) => Array.from({ length: 21 }, () => lowers[c.shift()]).join('') + extra(c);
const phrase = (c) => Array.from({ length: 7 }, () => words[c.shift()]).join('') + extra(c);

export default (sentence, word) => {
    const hash = pbkdf2Sync(sentence, word, 32768, 64, 'sha512');
    return [short([...hash]), long([...hash]), phrase([...hash])];
};
