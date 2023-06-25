import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('assetHierarchy')
export class AssetHierarchy {
  @Column()
  isParent: number | null;

  @Column()
  description: string | null;

  @Column()
  pid: string | null;

  @PrimaryColumn('varchar', { name: 'id', nullable: false })
  id: string | null;

  @Column()
  plant_desc: string | null;

  @Column()
  plt_serial_no: string | null;

  @Column()
  plt_model: string | null;

  @Column()
  plt_manufacturer: string | null;

  @Column()
  plt_supplier: string | null;

  @Column()
  plt_capital_cost: string | null;

  @Column()
  warranty_date: string | null;

  @Column()
  plant_type: string | null;

  @Column()
  plant_no: string | null;

  @Column()
  plt_attached_to: string | null;

  @Column()
  attached_to_2: string | null;

  @Column()
  plt_parent_job: string | null;

  @Column()
  plt_type_codes_1: string | null;

  @Column()
  plt_type_codes_2: string | null;

  @Column()
  plt_type_codes_3: string | null;

  @Column()
  plt_type_codes_4: string | null;

  @Column()
  plt_actual_mtbf: string | null;

  @Column()
  last_fail_date: string | null;

  @Column()
  total_failures: string | null;

  @Column()
  avg_weekly_usage: string | null;

  @Column()
  plt_target_mtbf: string | null;

  @Column()
  plt_condition: string | null;

  @Column()
  changeout_cost: string | null;

  @Column()
  PLT_BOM_ID: string | null;

  @Column()
  total_cost: string | null;

  @Column()
  mat_total_cost: string | null;

  @Column()
  level_num: number | null;
}
