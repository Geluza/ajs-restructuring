
export default function specAttack(character) {
  const attack = [];
  character.special.forEach((item) => {
    const {
      id, name, icon,
    } = item;
    let { description } = item;
    if ('description' in item === false) {
      description = 'описание недоступно';
    }
    attack.push({
      id, name, icon, description,
    });
  });
  return attack;
}
