import React, { Component, ReactNode, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const qrcodeRegionId = 'html5qr-code-full-region';

interface Html5QrcodePluginProps {
  fps?: number;
  qrbox?: number;
  aspectRatio?: number;
  disableFlip?: boolean;
  verbose?: boolean;
    qrCodeErrorCallback?: (errorMessage: string) => void;
    qrCodeSuccessCallback: (decodedText: string, decodedResult: any) => void;
}

class Html5QrcodePlugin extends Component<Html5QrcodePluginProps> {
  private html5QrcodeScanner!: Html5QrcodeScanner;

  componentDidMount() {
    function createConfig(props: Html5QrcodePluginProps) {
      const config: any = {};
      if (props.fps) {
        config.fps = props.fps;
      }
      if (props.qrbox) {
        config.qrbox = props.qrbox;
      }
      if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
      }
      if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
      }
      return config;
    }

    const config = createConfig(this.props);
    const verbose = this.props.verbose === true;

    if (!this.props.qrCodeSuccessCallback) {
      throw new Error('qrCodeSuccessCallback is a required callback.');
    }

    this.html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );
    this.html5QrcodeScanner.render(
      this.props.qrCodeSuccessCallback,
      this.props.qrCodeErrorCallback
    );
  }

  render(): ReactNode {
    return <div id={qrcodeRegionId} />;
  }
}

export default Html5QrcodePlugin;
