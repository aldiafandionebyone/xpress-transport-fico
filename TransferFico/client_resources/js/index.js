insight.ready(function () {
    var view = insight.getView();
    var observer = view.withFirstScenario();
    observer.bindAutoText('#hellomessage');
    view.start();
});
