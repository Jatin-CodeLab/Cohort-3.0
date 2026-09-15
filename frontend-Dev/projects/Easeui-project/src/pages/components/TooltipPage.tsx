import { Tooltip } from "@/components/Tooltip/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
	const basicUsageCode = `
import { Tooltip } from "@/components/Tooltip/Tooltip"

<Tooltip content="This is a tooltip">
  <button>Hover Me</button>
</Tooltip>`;

	const propsData = [
		{
			prop: "content",
			type: "string",
			default: "-",
			description: "The text displayed inside the tooltip",
		},
		{
			prop: "side",
			type: '"top" | "bottom" | "left" | "right"',
			default: '"top"',
			description: "The side where the tooltip appears",
		},
		{
			prop: "variant",
			type: '"dark" | "light"',
			default: '"dark"',
			description: "The visual style of the tooltip",
		},
	];

	return (
		<div className="max-w-4xl mx-auto p-6 space-y-12">
			<header className="space-y-2">
				<p
					className="text-4xl font-bold tracking-tight"
					style={{ color: "var(--text-color)" }}
				>
					Tooltip
				</p>

				<p className="text-lg text-gray-600">
					Displays additional information when hovering over an element.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Usage</h2>

				<ComponentDemo code={basicUsageCode}>
					<div className="flex items-center justify-center py-16">
						<Tooltip content="This is a tooltip">
							<button className="px-5 py-3 bg-indigo-600 text-white rounded-md">
								Hover Me
							</button>
						</Tooltip>
					</div>
				</ComponentDemo>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">API Reference</h2>

				<PropsTable data={propsData} />
			</section>
		</div>
	);
};

export default TooltipPage;
