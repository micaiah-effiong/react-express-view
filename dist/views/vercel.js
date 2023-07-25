"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VercelInviteUserEmail = void 0;
const components_1 = require("@react-email/components");
const React = __importStar(require("react"));
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
const VercelInviteUserEmail = ({ username = 'zenorocha', userImage = `${baseUrl}/static/vercel-user.png`, invitedByUsername = 'bukinoshita', invitedByEmail = 'bukinoshita@example.com', teamName = 'My Project', teamImage = `${baseUrl}/static/vercel-team.png`, inviteLink = 'https://vercel.com/teams/invite/foo', inviteFromIp = '204.13.186.218', inviteFromLocation = 'São Paulo, Brazil', }) => {
    const previewText = `Join ${invitedByUsername} on Vercel`;
    return (React.createElement(components_1.Html, null,
        React.createElement(components_1.Head, null),
        React.createElement(components_1.Preview, null, previewText),
        React.createElement(components_1.Tailwind, null,
            React.createElement(components_1.Body, { className: "bg-white my-auto mx-auto font-sans" },
                React.createElement(components_1.Container, { className: "border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]" },
                    React.createElement(components_1.Section, { className: "mt-[32px]" },
                        React.createElement(components_1.Img, { src: `${baseUrl}/static/vercel-logo.png`, width: "40", height: "37", alt: "Vercel", className: "my-0 mx-auto" })),
                    React.createElement(components_1.Heading, { className: "text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0" },
                        "Join ",
                        React.createElement("strong", null, teamName),
                        " on ",
                        React.createElement("strong", null, "Vercel")),
                    React.createElement(components_1.Text, { className: "text-black text-[14px] leading-[24px]" },
                        "Hello ",
                        username,
                        ","),
                    React.createElement(components_1.Text, { className: "text-black text-[14px] leading-[24px]" },
                        React.createElement("strong", null, "bukinoshita"),
                        " (",
                        React.createElement(components_1.Link, { href: `mailto:${invitedByEmail}`, className: "text-blue-600 no-underline" }, invitedByEmail),
                        ") has invited you to the ",
                        React.createElement("strong", null, teamName),
                        " team on",
                        ' ',
                        React.createElement("strong", null, "Vercel"),
                        "."),
                    React.createElement(components_1.Section, null,
                        React.createElement(components_1.Row, null,
                            React.createElement(components_1.Column, { align: "right" },
                                React.createElement(components_1.Img, { className: "rounded-full", src: userImage, width: "64", height: "64" })),
                            React.createElement(components_1.Column, { align: "center" },
                                React.createElement(components_1.Img, { src: `${baseUrl}/static/vercel-arrow.png`, width: "12", height: "9", alt: "invited you to" })),
                            React.createElement(components_1.Column, { align: "left" },
                                React.createElement(components_1.Img, { className: "rounded-full", src: teamImage, width: "64", height: "64" })))),
                    React.createElement(components_1.Section, { className: "text-center mt-[32px] mb-[32px]" },
                        React.createElement(components_1.Button, { pX: 20, pY: 12, className: "bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center", href: inviteLink }, "Join the team")),
                    React.createElement(components_1.Text, { className: "text-black text-[14px] leading-[24px]" },
                        "or copy and paste this URL into your browser:",
                        ' ',
                        React.createElement(components_1.Link, { href: inviteLink, className: "text-blue-600 no-underline" }, inviteLink)),
                    React.createElement(components_1.Hr, { className: "border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" }),
                    React.createElement(components_1.Text, { className: "text-[#666666] text-[12px] leading-[24px]" },
                        "This invitation was intended for",
                        ' ',
                        React.createElement("span", { className: "text-black" },
                            username,
                            " "),
                        ".This invite was sent from ",
                        React.createElement("span", { className: "text-black" }, inviteFromIp),
                        ' ',
                        "located in",
                        ' ',
                        React.createElement("span", { className: "text-black" }, inviteFromLocation),
                        ". If you were not expecting this invitation, you can ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us."))))));
};
exports.VercelInviteUserEmail = VercelInviteUserEmail;
exports.default = exports.VercelInviteUserEmail;
