import skills from './skills.json';

export default class SkillService {
    static getSkills() {
        return skills ? skills : [];
    }
}