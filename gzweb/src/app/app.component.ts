import { Component, OnInit } from '@angular/core';

// export class AppComponent {
  //   title = 'angular-gzweb';
  // }
  
  import { SceneManager } from 'gzweb';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/service/configService';
  
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (private config: ConfigService) {}


  ngOnInit(): void {
    this.connect()
  }  

  /**
   * Websocket Key
   */
  public authKey = '';

  /**
   * Scene Manager reference.
   */
  public sceneManager: SceneManager;

  /**
   * Connect to the Simulation.
   */
  public connect() {
    const wsUrl = `ws://${this.config.get("userID")}gzserver9002.localdev.me`;
    this.sceneManager = new SceneManager({
      websocketUrl: wsUrl,
      websocketKey: this.authKey,
      elementId: 'container',
    });
  }

  /**
   * Disconnect from the Simulation.
   */
  public disconnect() {
    if (this.sceneManager) {
      this.sceneManager.disconnect();
    }
  }

  /**
   * Required to resize the canvas.
   */
  public resize(): void {
    if (this.sceneManager) {
      this.sceneManager.resize();
    }
  }

  /**
   * Example of accessing the GzScene element of the Scene Manager.
   *
   * The SceneManager's Scene can be accessed this way, and special methods can be called.
   */
  public fog() {
    this.sceneManager.scene.addFog(0xffffff, 0.05, true);
  }

  /**
   * Example of a method exposed by the Scene Manager.
   *
   * Take a snapshot of the current canvas.
   */
  public snapshot() {
    this.sceneManager.snapshot();
  }

  /**
   * Example of a method exposed by the Scene Manager.
   *
   * Resets the view.
   */
  public resetView() {
    this.sceneManager.resetView();
  }
}
