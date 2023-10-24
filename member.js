function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/skills/skillsMember.html',
    controller: SkillsMemberCtrl,
    controllerAs: 'skillsMember',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}